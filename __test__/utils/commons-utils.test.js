import { cryptograph, generatePass, extractIdFromKey } from '../../src/utils/commons-utils';

describe('commons-utils', () => {
    // Depends Expo
    // it('cryptograph', async () => {
    //     const c = await cryptograph('123');
    //     console.log('>>', c);
    //     expect(c).toEqual('202cb962ac59075b964b07152d234b70');
    // });

    it('extractIdFromKey', () => {
        expect(extractIdFromKey('@user:ab12c6b1-7539-4b90-90c2-c055d21ceb51')).toEqual('ab12c6b1-7539-4b90-90c2-c055d21ceb51');
    })

    it('generatePass', () => {
        const p = generatePass(5);
        console.log('*', p);
        expect(p.length).toBe(5);
    })
});