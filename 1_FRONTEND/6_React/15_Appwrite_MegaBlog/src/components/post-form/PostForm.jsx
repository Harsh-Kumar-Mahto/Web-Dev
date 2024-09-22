import React, { useCallback } from 'react'
import {useForm} from 'react-hook-form'
import {Button, Input, Select, RTE} from '../index'
import appwriteService from '../../appwrite/config'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


function PostForm({post}) {
    const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
        defaultValues:{
            title: post?.Title || '',
            slug: post?.slug || '',
            Content: post?.Content || '',
            Status: post?.Status || 'active',
        }
    })

    const navigate = useNavigate()
    const userData = useSelector(state => state.user.userData)

    const submit = async(data) => {
        if(post) {
            const file = data.Image[0] ? appwriteService.uploadFile(data.Image[0]) : null

            if(file){
                appwriteService.deleteFile(post.FeaturedImage)
            }

            const dbPost = await appwriteService.updatePost(post.$id, {...data, FeaturedImage: file ? file.$id : undefined})

            if(dbPost){
                navigate(`/post/${dbPost.$id}`)
            }
        }
        else{
            const file = await appwriteService.uploadFile(data.Image[0])
            if(file){
                const fileId = file.$id
                data.FeaturedImage = fileId
                const dbPost = await appwriteService.createPost({...data,Userid: userData.$id})

                if(dbPost){
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        }
    }

    const slugTranform = useCallback((value) => {
        if(value && typeof value == 'string'){
            return value.trim().toLowerCase().replace(/^[a-zA-Z\d]+/g, '-').replace(/\s/g,'-')
        }
        return ''

    },[])

    React.useEffect(() => {
        const subscription = watch((value, {name}) => {
            if(name == 'title'){
                setValue('slug',slugTranform(value.title, {shouldValidate: true}))
            }
        })

        return () =>{
            subscription.unsubscribe()
        }
    },[watch, slugTranform, setValue])
  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
  )
}

export default PostForm
