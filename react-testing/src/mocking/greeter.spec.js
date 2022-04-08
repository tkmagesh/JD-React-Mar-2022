import Greeter from './greeter';

test('Should greet "Good Morning" when greeted before 12', () => {
    let mockDateService = {
        getCurrentTime : jest.fn().mockReturnValue(new Date('8-apr-2022 10:00:00 AM'))
    }
    const greeter = new Greeter(mockDateService)
    const userName = 'Magesh';
    const expectedResult = 'Hi Magesh, Good Morning!'

    const actualResult = greeter.greet(userName)

    expect(actualResult).toBe(expectedResult)
    expect(mockDateService.getCurrentTime).toHaveBeenCalledTimes(1)
})

test('Should greet "Good Day" when greeted after 12', () => {
    let mockDateService = {
        getCurrentTime : jest.fn().mockReturnValue(new Date('8-apr-2022 14:00:00 AM'))
    }
    const greeter = new Greeter(mockDateService)
    const userName = 'Magesh';
    const expectedResult = 'Hi Magesh, Good Day!'

    const actualResult = greeter.greet(userName)

    expect(actualResult).toBe(expectedResult)
    expect(mockDateService.getCurrentTime).toHaveBeenCalledTimes(1)
})