import mapChooser from './mapChooser';

describe('mapChooser', function () {
    it('returns an image file name based on input give to it', function () {
        let expected = 'portland.jpg'
        let actual = mapChooser('portland');
        expect(actual).toEqual(expected);
    })
    it('returns an image file name based on input give to it', function () {
        let expected = 'default.jpg'
        let actual = mapChooser('');
        expect(actual).toEqual(expected);
    })
})
