import conf from '../conf/conf';
import {Client, Account, ID, Databases, Storage, Query} from 'appwrite';

export class Service{
    client = new Client()
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectID);
        this.databases = new Databases();
        this.bucket = new Storage();
    }

    async createPost({Title, Slug, Content, FeaturedImage, Status, UserID}){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                Slug,
                {
                    Title,
                    Content,
                    FeaturedImage,
                    Status,
                    UserID
                }
            )
        }catch(error){
            console.log("Appwrite service :: createPost :: error", error);
        }
    }

    async updatePost(Slug, {Title, Content, FeaturedImage, Status}){
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                Slug,
                {
                    Title,
                    Content,
                    FeaturedImage,
                    Status,
                }
            )
        }catch(error){
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }
    
    async deletePost(Slug){
        try{
            await this.databases.deleteDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                Slug
            )
            return true;
        }catch(error){
            console.log("Appwrite service :: deletePost :: error", error);
            return false;
        }
    }

    async getPosts(Slug){
        try{
            await this.databases.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                Slug
            )
            return true;
        }catch(error){
            console.log("Appwrite service :: getPosts :: error", error);
            return false;
        }
    }

    async getPost(queries = [Query.equal("Status","active")]){
        try{
            await this.databases.getDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                queries,
            )
            return true;
        }catch(error){
            console.log("Appwrite service :: getPost :: error", error);
            return false;
        }
    }

    // File Upload Service

    async uploadFile(File){
        try{
            return await this.bucket.createFile(
                conf.appwriteBucketID,
                ID.unique,
                File,
            )
        }catch(error){
            console.log("Appwrite service :: uploadFile :: error", error);
            return false;
        }
    }

    async deleteFile(FileID){
        try{
            await this.bucket.deleteFile(
                conf.appwriteBucketID,
                FileID
            )
            return true
        }catch(error){
            console.log("Appwrite service :: deleteFile :: error", error);
            return false
        }
    }

    async getFilePreview(FileID){
        try {
            return this.bucket.getFilePreview(
                conf.appwriteBucketID,
                FileID,
            )
        } catch (error) {
            
        }
    }

}

const service = new Service()

export default service