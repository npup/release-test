export function getVersion(): Result {
    return {
        version: 1,
        text: "v1.2.0",
    };
}

type Result = {
    version: number;
    text: string;
};
