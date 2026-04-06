class User {
    skills: string[];

    constructor(skills: string[]) {
        this.skills = skills;
    }

    addSkill(skills: string): void;
    addSkill(skills: string[]): void;
    addSkill(skills: string | string[]): void {
        if (typeof skills == 'string') {
            this.skills.push(skills);
        } else {
            this.skills = this.skills.concat(skills);
        }
    }
}


const user = new User(['3']);
user.addSkill(['1', '2'])
console.log(user);

function run(distance: string): string;
function run(distance: number): number;
function run(distance: number | string): number | string {
    if (typeof distance == 'number') {
        return 1;
    } else {
        return '';
    }
}
