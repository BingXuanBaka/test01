export interface ListContent {
    title: string;
    description: string;
    updateDate: Date;
    hotRate: number;
    likes: number;
    tags: Map<string, string[]>;
    imgSrc: string;
}