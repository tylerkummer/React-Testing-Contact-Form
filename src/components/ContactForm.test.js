import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders correctly", () => {
    render(<ContactForm />);
});

test("contact form add new details to the contact", async() => {
    const { getByLabelText, getByTestId, findByText } = render(<ContactForm />);

    const firstInput = getByLabelText(/First Name*/i);
    const lastInput = getByLabelText(/Last Name*/i);
    const emailInput = getByLabelText(/Email*/i);
    const messageInput = getByLabelText(/Message/i);

    fireEvent.change(firstInput, {target: { name: 'firstName', value: 'Ty'}});
    fireEvent.change(lastInput, {target: { name: 'lastName', value: 'Kummer'}});
    fireEvent.change(emailInput, {target: { name: 'email', value: 'tyler@tyler.com'}});
    fireEvent.change(messageInput, {target: { name: 'message', value: 'hey'}});

    const submitButton = getByTestId("submit");
    fireEvent.click(submitButton);

    await findByText(/Ty/i);
    await findByText(/Kummer/i);
    await findByText(/tyler@tyler.com/i);
    await findByText(/hey/i);
});

test("shows maxLength error message", async() => {
    const { getByLabelText, getByTestId, findByText } = render(<ContactForm />);

    const max = getByLabelText(/First Name*/i);
    fireEvent.change(max, {target: {name: 'firstName', value: 'Tyler'}});

    const submitButton = getByTestId("submit");
    fireEvent.click(submitButton);
    
    await findByText(/maxLength/);
});