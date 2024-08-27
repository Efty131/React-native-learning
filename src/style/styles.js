import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    External: {
        color: 'red',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
    },
    container: {
        backgroundColor: '#f8f8f8',
        paddingTop: 15,
    },
    list: {
        paddingHorizontal: 20,
    },
    item :{
        backgroundColor: 'crimson',
        borderWidth: 5,
        borderColor: 'yellow',
        padding: 20,
        marginVertical: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    title: {
        color: '#fff',
        fontSize: 18,
    }
});

export default styles;