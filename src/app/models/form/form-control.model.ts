export class FormControlBase<T> {
    value: T;
    key: string;
    label: string;
    placeholder: string;
    required: boolean;
    order: number;
    controlType: string;
    type: string;
    class: string;
    options: { key: string, value: string, checked?: boolean, id?: any }[];
    rows?: number;
    autosize?: boolean;
    disabled?: boolean;
    validators: { key: 'required' | 'maxLength' | 'pattern' | 'minLength', value: any, label: string }[];
    optionKey?: boolean;
    showEmptyOption?: boolean;
    emptyOptionLabel?: string;
    hasDependency?: boolean;

    constructor(options: {
        value?: T;
        key?: string;
        label?: string;
        placeholder?: string;
        required?: boolean;
        order?: number;
        controlType?: string;
        type?: string;
        class?: string;
        options?: { key: string, value: string, checked?: boolean, id?: any }[];
        rows?: number;
        autosize?: boolean;
        disabled?: boolean;
        validators?: { key: 'required' | 'maxLength' | 'pattern' | 'minLength', value: any, label: string }[];
        optionKey?: boolean;
        showEmptyOption?: boolean;
        emptyOptionLabel?: string;
        hasDependency?: boolean;
    } = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.placeholder = options.placeholder || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.type = options.type || '';
        this.class = options.class || '';
        this.options = options.options || [];
        this.rows = options.rows || 4;
        this.autosize = options.autosize || false;
        this.disabled = options.disabled || false;
        this.validators = options.validators || [];
        this.optionKey = options.optionKey || false;
        this.showEmptyOption = options.showEmptyOption || false;
        this.emptyOptionLabel = options.emptyOptionLabel || '';
        this.hasDependency = options.hasDependency || false;
    }
}