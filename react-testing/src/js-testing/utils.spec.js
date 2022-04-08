import * as utils from './utils'

test('Utils - add operation', () => {
    //Arrange
    let x = 100,
        y = 200,
        expectedResult = 300;

    //Act
    let actualResult = utils.add(x,y)

    //Assert
    expect(actualResult).toBe(expectedResult);
});