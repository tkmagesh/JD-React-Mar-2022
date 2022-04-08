import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Greeter from './greeter'

it("should greet the user", async () => {
     render(<Greeter/>)
    const txtUserName = await screen.findByLabelText('User Name :')
    expect(txtUserName).toBeInTheDocument()
    userEvent.type(txtUserName, 'Magesh');

    const btnGreet = await screen.findByText('Greet')
    userEvent.click(btnGreet)

    await screen.findByText('Hi Magesh, Have a nice day!')
})