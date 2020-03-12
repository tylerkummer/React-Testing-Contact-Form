import React from 'react';
import { render, fireEvent, getByTestId } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders correctly", () => {
    render(<ContactForm />);
});

test("contact form add new details to the contact", () => {
    const { getByLabelText, findByTestId } = render(<ContactForm />);

    const firstInput = getByLabelText(/First Name*/i);
    const lastInput = getByLabelText(/Last Name*/i);
    const emailInput = getByLabelText(/Email*/i);
    const messageInput = getByLabelText(/Message/i);

    fireEvent.change(firstInput, {target: { name: 'firstName', value: 'Ty'}});
    fireEvent.change(lastInput, {target: { name: 'lastName', value: 'Kummer'}});
    fireEvent.change(emailInput, {target: { name: 'email', value: 'tyler@tyler.com'}});
    fireEvent.change(messageInput, {target: { name: 'message', value: 'hey'}});

    // const submitButton = findByTestId("submit");

    // fireEvent.click(submitButton);
});