import { QuanHuyen } from "./quan-huyen";

export class PhuongXa {
    id!: number;
    ten!: string;
    moTa!: string;
    quanHuyen!: QuanHuyen;
}

export class PhuongXaReq {
    ten!: string;
    moTa!: string;
    idQuanHuyen!: number;
}
