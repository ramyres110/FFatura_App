import React from 'react';
import { Icon, Item, Picker, Label } from 'native-base';
import { useGroups } from '../contexts/group-context';

function SelectGroup({ value, onChangeText, onBlur }) {
    const { groups } = useGroups();

    function handleChange(groupuid) {        
        onChangeText(groupuid);
    }

    return (
        <Item style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', marginTop: 15 }}>
            <Label>*Grupo</Label>
            <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Grupo"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={value}
                onValueChange={handleChange}                
            >
                {
                    (!groups || !groups.length) ?
                        <Picker.Item label="Nenhum grupo cadastrado" value="" />
                        :
                        groups.map((group) => 
                            <Picker.Item label={group.name} value={group.uid} key={group.uid} />
                        )

                }
            </Picker>
        </Item>
    );
}

export default SelectGroup;