import { Object } from './object';
import { Repository } from './repository';
import { Reference } from './reference';

export namespace Revparse {
    enum MODE {
        SINGLE = 1,
        RANGE = 2,
        MERGE_BASE = 4
    }
}

export class Revparse {
    static ext(object_out: Object, reference_out: Reference, repo: Repository, spec: string): number;
    static single(repo: Repository, spec: string): Promise<Object>;
}
