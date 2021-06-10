6/9/2021

To DOs:
1. Implement Editting Feature of Card
- Add an event listener to the pencil attribute.
- Retrieve index number of item that objedcdt represents.
- Open up form with current attributes (title, author)
- Allow user to modify attributes
- On submit edit underlying array and update the display/

Key Takeaways:

Submitting forms. By default, when you submit a form, the page auto reloads. You can prevent this with onsubmit = "return false" in the form tag at the "top" of the form.

Mystery behind the form tag:
For some reason when linking the input tags to javascript, the second to last tags requirement attribute suddenly dissappears. A consequence of this is that I have the ability to create a card with a blank author, when the require field should not allow for that.