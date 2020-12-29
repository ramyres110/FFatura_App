import React from 'react';
import { Content, Form, View } from 'native-base';

const FormContent = ({ children }) => {
    return (
        <Content>
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'stretch', padding: 20 }}>
                <Form>
                    {children}
                </Form>
            </View>
        </Content>
    );
}

export default FormContent;