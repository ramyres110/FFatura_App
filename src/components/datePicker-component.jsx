import React, { useEffect, useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Input, View, Item, Label } from 'native-base';
import { Field } from 'formik';

const DatePicker = ({ name, onChangeText, onBlur, label, value }) => {
    const [date, setDate] = useState((!value) ? new Date() : (value instanceof Date) ? value : new Date(value));
    const [show, setShow] = useState(false);

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        console.log('asdasdasdasd');
        setDate(currentDate);
        onChangeText(currentDate);
    };

    const showDatepicker = () => {
        setShow(true);
    };

    return (
        <View>
            <Item floatingLabel style={{ marginTop: 15 }}>
                <Label>{label}</Label>
                <Input
                    name={name}
                    onChangeText={() => { }}
                    onBlur={onBlur}
                    onTouchStart={() => showDatepicker()}
                    value={date.toLocaleDateString()}
                />
            </Item>
            {
                show && (
                    <DateTimePicker
                        value={date}
                        mode="date"
                        display="default"
                        onChange={onChangeDate}
                    />
                )
            }
        </View >
    );
};

export default DatePicker;
























































