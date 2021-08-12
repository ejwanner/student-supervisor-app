import React from 'react'
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Button } from "react-native-paper";
import { useDispatch } from 'react-redux';
import { setFilterCategory } from '../shared/data/category';
import { setFilterStatus } from '../shared/data/status';
import { clearFilter } from '../shared/data/thesis';

export type FilterWrapperProps = {
    navigation: any
}

const FilterWrapper: React.FC<FilterWrapperProps> = ({ navigation }) => {
    const dispatch = useDispatch()
    const goToFilter = () => navigation.navigate("Filter");
    React.useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            clearThesisFilter()
        });

        return unsubscribe
    }, [navigation])

    const clearThesisFilter = () => {
        dispatch(clearFilter())
        dispatch(setFilterStatus(null))
        dispatch(setFilterCategory(null))
    }

    return <View style={styles.filterRow}>
        <Button icon="filter" onPress={goToFilter}>
            Filter
        </Button>
        <Button icon="cancel" onPress={clearThesisFilter}>
            Reset Filter
        </Button>
    </View>
}

const styles = StyleSheet.create({
    filterRow: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingTop: 12,
        paddingBottom: 18,
        borderBottomColor: "rgba(0,0,0,0.1)",
        borderBottomWidth: 1,
    },
})

export default FilterWrapper