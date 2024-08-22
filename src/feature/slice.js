import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    widgets: [],
    cwppWidgets: [],
    businessWidgets: [],
};

const widgetSlice = createSlice({
    name: 'widget',
    initialState,
    reducers: {
        setWidgetData: (state, action) => {
            state.widgets = action.payload;
        },
        setCwppWidgetData: (state, action) => {
            state.cwppWidgets = action.payload;
        },
        setBuisnessWidgetData: (state, action) => {
            state.businessWidgets = action.payload;
        },
        addWidget: (state, action) => {
            state.widgets.push(action.payload);
        },

        addCWPPWidget: (state, action) => {
            state.cwppWidgets.push(action.payload);
        },

        addbuisnessWidget: (state, action) => {
            state.businessWidgets.push(action.payload);
        },
        removeWidget: (state, action) => {
            state.widgets = state.widgets.filter((_, i) => i !== action.payload);
        },
        cwppRemoveWidget: (state, action) => {
            state.cwppWidgets = state.cwppWidgets.filter((_, i) => i !== action.payload);
        },
        businessRemoveWidget: (state, action) => {
            state.businessWidgets = state.businessWidgets.filter((_, i) => i !== action.payload);
        },
        removeUnCheckedWidget: (state, action) => {
            const { index, name } = action.payload;
            if (name === 'cspm') {
                state.widgets = state.widgets.filter((_, i) => {
                    return i !== index;
                });
            }
            if (name === 'cwpp') {
                state.cwppWidgets = state.cwppWidgets.filter((_, i) => {
                    return i !== index;
                });
            } if (name === 'business') {
                state.businessWidgets = state.businessWidgets.filter((_, i) => {
                    return i !== index;
                });
            }
        },
    }
});

export const { addWidget, removeWidget, setWidgetData, setCwppWidgetData, cwppRemoveWidget, businessRemoveWidget, setBuisnessWidgetData, addCWPPWidget, addbuisnessWidget , removeUnCheckedWidget } = widgetSlice.actions;
export default widgetSlice.reducer;
