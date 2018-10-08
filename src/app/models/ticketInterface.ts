import { ArrayType } from "@angular/compiler";

export interface TicketInterface{
    id?: string;
    creatorId?: string;
    assignedId?: string;
    company?: string;
    status?: boolean;
    assignedHistory?: ArrayType;
    issue?: string;
    detailsOfProblem?: string;
    details?: ArrayType;
    createDate?: string;
    closeDate?: string;
}