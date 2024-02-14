interface ErrorRulesMessageProps {
    title: string;
    rules: string[];
}

export default function ErrorRulesMessage({ title, rules }: ErrorRulesMessageProps) {
    return (
        <span className="text-red-500 text-xs font-bold italic">
            <p className="mt-1">{title}</p>
            <ul className="list-disc list-inside">
                {
                    rules.map((rule: string, index: number) => {
                        return <li key={index} className="ml-2">{rule}</li>
                    })
                }
            </ul>
        </span>
    )
}