import React, {useContext} from 'react';
import { StyleSheet } from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
    const { state, editBlogPost } = useContext(Context);
    const id = navigation.getParam('id');
    const blogPost = state.find(
        (blogPost) => blogPost.id === id
    );

    return (
        <BlogPostForm 
        initialValues={{ title: blogPost.title, content: blogPost.content }}
            onSubmit={(title, content) => {
                editBlogPost(id, title, content,
                    ()=> navigation.pop()) ;   //navigation.pop() will navigate to just previos screen
                //editBlogPost function is written in editBlogPost 
            }}
        />
    );
};

const styles = StyleSheet.create({});

export default EditScreen;