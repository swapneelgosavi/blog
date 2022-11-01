import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
    const { addBlogPost } = useContext(Context);

    return (
        <BlogPostForm
            onSubmit={(title, content) => {
                addBlogPost(title, content,
                    () => { navigation.navigate('Index'); }); //navigate to navigate on Index screen. this parameter will get used in BLogContext file
            }} />
    );
};

const styles = StyleSheet.create({

});

export default CreateScreen;
