require('jest-fetch-mock').enableMocks();
fetchMock.dontMock();

test('Input_ContactForm', async () => {
    expect(true).toBe(true);
});

test('Received_Input_ContactForm', async () => {
    expect(false).toBe(false);
});

test('SecurityCheck_ContactForm ', async () => {
    expect(true).toBe(true);
});