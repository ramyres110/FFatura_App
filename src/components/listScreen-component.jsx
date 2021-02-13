import React, { Fragment } from "react";
import { Body, Button, Icon, Left, List, ListItem, Right, ScrollableTab, Tab, Tabs, Text, View } from "native-base";
import { Colors } from "../utils/commons-utils";
import ButtonFloat from "./buttonFloat-component";

// import { Container } from "./styles";

function ListScreen({ data, onItemSelected, onNewClick, options, screenHandler, navigation, extraLeftComponent, extraRightComponent }) {
    const params = {
        label: 'name',
        icon: 'person',
        addBtnLabel: 'Adicionar',
        addBtnIcon: 'add',
        ...options
    }

    function onItemPress(item) {
        if (!!onItemSelected) {
            onItemSelected(item);
        }
        if (!!screenHandler && !!navigation) {
            navigation.push(screenHandler, item);
        }
    }

    function btnPress() {
        if (!!onNewClick) {
            onNewClick();
        }
        if (!!screenHandler && !!navigation) {
            navigation.push(screenHandler);
        }
    }

    return (
        <Fragment>
            {
                (!data || !data.length) ?
                    <View style={{ flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <Text note>Nenhum item encontrado!</Text>
                    </View>
                    :
                    <List style={{ paddingTop: 10 }}>
                        {
                            data.map((item) =>
                                <ListItem key={item.uid} icon onPress={() => { onItemPress(item) }}>
                                    {
                                        (!!params.icon) &&
                                        <Left icon >
                                            <Icon name={params.icon} style={{ width: 26 }} />
                                        </Left>
                                    }
                                    {(!!extraLeftComponent) && extraLeftComponent(item)}
                                    <Body >
                                        <Text>{item[params.label]}</Text>
                                    </Body>
                                    <Right>
                                        {(!!extraRightComponent) && extraRightComponent(item)}
                                        <Icon name="arrow-forward" />
                                    </Right>
                                </ListItem>
                            )
                        }
                    </List>
            }

            <ButtonFloat label={params.addBtnLabel} onPress={btnPress} />
        </Fragment>
    );
}

export default ListScreen;