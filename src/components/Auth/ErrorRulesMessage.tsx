interface ErrorRulesMessageProps {
    title: string;
    rules: string[];
}

export default function ErrorRulesMessage({ title, rules }: ErrorRulesMessageProps) {
    return (
        <span className="text-red-500 text-xs font-bold italic">
            <p>{title}</p>
            <ul className="list-disc list-inside">
                {
                    rules.map((rule: string) => {
                        return <li className="ml-2">{rule}</li>
                    })
                }
            </ul>
        </span>
    )
}