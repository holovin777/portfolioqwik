export default interface CardProps {
    startDate?: string;
    finishDate?: string;
    startedWork?: string;
    finishedWork?: string;
    title: string;
    subtitle: string;
    footer?: string;
    items?: string[]
}