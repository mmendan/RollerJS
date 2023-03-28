export class Roller {
    private _distribution: Map<number, number>;
    private _last: number;
    private _faces: number;

    constructor(faces: number) {
        if (faces < 2) {
            faces = 6; // default to a 6-sided die
        }
        this._faces = faces;
        this._last = 0;
        this._distribution = new Map<number, number>();
        for (let i = 1; i <= faces; i++) {
            this._distribution.set(i, 0);
        }
    }

    roll(value: number): number {
        if (value < 1 || value > this._faces) {
            return 0;
        }
        this._last = value;
        this._distribution.set(value, this._distribution.get(value) + 1);
        return value;
    }

    last(): number {
        return this._last;
    }

    distribution(): Map<number, number> {
        return new Map<number, number>(this._distribution);
    }
}
