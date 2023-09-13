export interface NotificacionInteface {
    id: number,
    number: number,
    state: number,
    expiration_date: string,
    notification: number,
    idusers?: string,
    select?: string
    name?: string
}