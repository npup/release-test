export function getVersion(): Result {
    return {
        version: 1,
        text: "v1",
    };
}

type Result = {
    version: number;
    text: string;
};
