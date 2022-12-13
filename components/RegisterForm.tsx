import { Button, Input, Flex, Spacer } from "native-base";
import { View, StyleSheet, Text } from "react-native";

const RegisterForm = () => {
    return (
        <Flex align='center' justify='center'>
            <Text>Register</Text>
            <Spacer/>
            <Input
                placeholder="Email"
                type="text"
                mx={10}
                my={20}
            />
             <Spacer/>
            <Input
                placeholder="Password"
                type="password"
            />
            <Button>Register</Button>
        </Flex>
        // <View style={styles.wrapper}>
        // </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default RegisterForm;