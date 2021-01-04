/**
 * Component Test, Dont use it
 */
import React from 'react';
import { useState } from 'react';

import { Container, Input, Item, Label, Root, View } from 'native-base';

import { TextInputMask } from 'react-native-masked-text'

import FormContent from '../src/components/formContent-component';
import { useRef } from 'react';
import { PixelRatio, Platform, StyleSheet } from 'react-native';

import styled from 'styled-components/native';

/**
<div class="input-container">
    <input id="name" class="input" type="text" pattern=".+" required />
    <label class="label" for="name">Nome</label>
</div>
 */
// // InputGroup
// const platform = Platform.OS;
// const variables = {
//     inputFontSize: 17,
//     inputBorderColor: '#D9D5DC',
//     inputSuccessBorderColor: '#2b8339',
//     inputErrorBorderColor: '#ed2f2f',
//     inputHeightBase: 50,
//     borderRadiusBase: platform === 'ios' ? 5 : 2,
//     borderWidth: 1 / PixelRatio.getPixelSizeForLayoutSize(1),
// }
// const inputTheme = {
//     height: variables.inputHeightBase,
//     color: variables.inputColor,
//     paddingLeft: 5,
//     paddingRight: 5,
//     flex: 1,
//     fontSize: variables.inputFontSize,
//     borderBottomColor: variables.inputBorderColor,
// };

// const style = StyleSheet.create({
//     container: {
//         position: 'relative',
//     },
//     input: {
//         ...inputTheme,
//         width: "100%",
//         borderWidth: 0,
//         borderBottomWidth: variables.borderWidth,
//         elevation: 1
//     },
//     label: {
//         top: 0,
//         left: 0,
//         right: 0,
//         color: "#616161",
//         display: "flex",
//         alignItems: "center",
//         position: "absolute",
//         fontSize: 17,
//     }
// })


const ContentStyled = styled.View`
    position: relative;
`

const StyledTextInputMask = styled(Input)`
`;

const Aux = () => {
    const [a, setA] = useState("");
    const [b, setB] = useState("");

    return (
        <Root>
            <Container>
                <View style={{ flex: 1, paddingTop: 100 }}>

                    <FormContent>

                        <ContentStyled>

                            <Label>*Faturamento Total (R$)</Label>

                            <StyledTextInputMask
                                defaultValue={a}
                                type={'cel-phone'}
                                options={{
                                    maskType: 'BRL',
                                    withDDD: true,
                                    dddMask: '(99) '
                                }}
                                value={a}
                                onChangeText={text => { setA(text) }}
                            />


                            <Item floatingLabel style={{ marginTop: 15 }}>
                                <Label>*Faturamento Total (R$)</Label>
                                <Input
                                    style={{ elevation: 1 }}
                                    name="incomes"
                                    onChangeText={(v) => setB(v)}
                                    onBlur={() => { }}
                                    value={b}
                                    autoCompleteType="cc-number"
                                    textContentType="none"
                                    keyboardType="numeric"
                                />
                            </Item>
                        </ContentStyled>
                    </FormContent>
                </View>
            </Container>
        </Root>
    );
}

export default Aux;