import {PhuongXa} from "./phuong-xa";

export class CanHoReq {
    dienTich!: number;
    huong!: string;
    idPhuongXa!: number;
    soPhongNgu!: number;
    soPhongWc!: number;
    giaTien!: number;
}

export class CanHoRes {
    id!: number;
    dienTich!: number;
    giaTien!: number;
    huong!: string;
    soPhongNgu!: number;
    soPhongWc!: number;
    trangThai!: string;
    phuongXaRes!: PhuongXa;
}