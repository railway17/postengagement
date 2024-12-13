import { useCallback } from "react";
import Badge from "../../common/badge";

type KeywordsProp = {
    value: string;
    header: string;
    keywords: Array<string>;
    setValue: React.Dispatch<string>;
    setKeywords: React.Dispatch<Array<string>>;
}

const Keywords = ({
    value,
    header,
    keywords,
    setValue,
    setKeywords,
}: KeywordsProp) => {
  
    const handleCloseBadge = useCallback((array: Array<string>, index: number) => {
        const res = array.filter((_, i: number) => i !== index);
        setKeywords(res);
    }, [setKeywords]);

    const handleChangeVal = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }, [setValue])

    const handleAddKeyword = useCallback((
        keyword: string,
        array: Array<string>
    ) => {
        if (keyword.trim().length < 1) return;
        if (array.includes(keyword.trim())) {
        return;
        }
        const res = [...array, keyword];
        setKeywords(res);
        setValue("");
    }, [setKeywords, setValue]);

    const handleKeyPress = useCallback((
        e: React.KeyboardEvent<HTMLInputElement>,
        keyword: string,
        array: Array<string>
    ) => {
        if (e.key === 'Enter') handleAddKeyword(keyword, array);
    }, [handleAddKeyword]);

    return (
        <div className="form-control">
            <div className="label !pl-0">
                <span className="label-text">
                    {header}
                </span>
            </div>
            <div className="mb-2">
                {
                    keywords.map((keyword, index) => {
                        return (
                        <Badge
                            label={keyword}
                            key={keyword + "|" + index}
                            onClose={() => handleCloseBadge(keywords, index)}
                        />
                        );
                    })
                }
            </div>
            <div className="join">
                <input
                    value={value}
                    className="input join-item w-full input-bordered focus:outline-offset-0"
                    placeholder="Specify Keywords"
                    onChange={handleChangeVal}
                    onKeyDown={(e) => handleKeyPress(e, value, keywords)}
                />
                <button
                    className="btn join-item btn-primary rounded-md"
                    onClick={() => handleAddKeyword(value, keywords)}
                >
                    Add Keyword
                </button>
            </div>
        </div>
    );
}

export default Keywords;