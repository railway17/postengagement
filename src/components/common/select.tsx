import { useCallback } from "react";
import { SelectOptionType } from "../../types/global";

type SelectProps = {
    label: string;
    value: SelectOptionType;
    includeSelect?: boolean;
    options: Array<SelectOptionType>;
    onSelect: (option: SelectOptionType | undefined) => void; // Stronger typing
};

const Select = ({ label, options, includeSelect = false, value, onSelect }: SelectProps) => {
    // Memoize the handleChange function to avoid re-creating it on every render
    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = options.find((el) => el.value === e.target.value);
        onSelect(selectedOption);
        },
        [onSelect, options] // Only recreate when options or onSelect change
    );

    // Memoize the rendering of options
    const renderOptions = useCallback(() => {
        return options.map((el, idx) => (
        <option key={el.value} value={el.value}>
            {el.label}
        </option>
        ));
    }, [options]); // Only recreate when options change

    return (
        <div className="form-control">
            {/* Label */}
            {label && (
                <div className="label !px-0">
                <span className="label-text">{label}</span>
                </div>
            )}

            {/* Select Dropdown */}
            <div className="form-control">
                <select
                    spellCheck
                    value={value.value}
                    autoComplete="on"
                    className="select select-bordered w-full"
                    onChange={handleChange}
                >
                {/* Placeholder Option */}
                {includeSelect && (
                    <option value="" disabled>
                        Select
                    </option>
                )}

                {/* Options */}
                {renderOptions()}
                </select>
            </div>
        </div>
    );
};

export default Select;
