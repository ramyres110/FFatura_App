import React, { Fragment } from "react";
import { Body, Button, Icon, Left, List, ListItem, Right, ScrollableTab, Tab, Tabs, Text, View } from "native-base";
import { Colors } from "../utils/commons-utils";

// import { Container } from "./styles";

function ListScreen({ data, onItemSelected, onNewClick, options }) {
    console.log(data);

    const params = {
        label: 'name',
        icon: 'person',
        addBtnLabel: 'Adicionar',
        addBtnIcon: 'add',
        ...options
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
                                <ListItem key={item.uid} icon onPress={() => { onItemSelected(item) }}>
                                    {
                                        (!!params.icon) &&
                                        <Left icon >
                                            <Icon name={params.icon} />
                                        </Left>
                                    }

                                    <Body >
                                        <Text>{item[params.label]}</Text>
                                    </Body>
                                    <Right>
                                        <Icon name="arrow-forward" />
                                    </Right>
                                </ListItem>
                            )
                        }
                    </List>
            }

            <Button activeOpacity primary rounded style={{ position: "absolute", bottom: 5, right: 5, backgroundColor: Colors.orange }} onPress={onNewClick}>
                <Icon name={params.addBtnIcon} />
                <Text>{params.addBtnLabel}</Text>
            </Button>
        </Fragment>
    );
}

export default ListScreen;