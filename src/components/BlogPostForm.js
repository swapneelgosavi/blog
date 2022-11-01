import React,{useState} from 'react';
import { View, Text,TextInput,Button, StyleSheet } from 'react-native';


const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View>
            <Text style={styles.label}>Enter Title</Text>
            <TextInput 
                style={styles.input} 
                value={title} 
                onChangeText={(text) => setTitle(text)} 
            />
            <Text style={styles.label}>Enter Content</Text>
            <TextInput 
                style={styles.input} 
                value={content} 
                onChangeText={(content) => setContent(content)} 
            />
            <Button 
                title='Save Blog Post'
                onPress={ () => onSubmit(title, content)}
            />
        </View>
    );
};

//when flow will come from create screen, then initialValues will be undefined
// as we are not passing that props. Hence to initialize some default value to 
//initialValues follwing function is used.
BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content:''
    }
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default BlogPostForm;