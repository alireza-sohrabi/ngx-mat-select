# {{ NgDocPage.title }}

You need to use Server-Side mode, When there are enormous options that the loading of them costs huge then
you have to load them page per page.

When you are using server-side select box. you need to know several things,

- How to fetch the options?
- How to treat with the value of the select box?
- When setting the value, is the value verified with the options?

> To make it brief, every select box is in the multiple mode, but you can make it single just with
> change the value of the `multiple` input to false

> **Note**
> `Select Box` always takes advantage of virtual and Infinite Scroll together in the `Server-Side` Mode that
> means don't worry about the rendered options in the DOM.

## Fetching the Options

to fetch the options you need to provide a function with an object parameter, has the below properties

| Property     | Description                                                  |
|--------------|--------------------------------------------------------------|
| `searchTerm` | the string chars are written down by the client.             |
| `pageNumber` | the number of the current page which gets started from `one` |
| `pageSize`   | the number of options are present in each page.              |

{{ NgDocActions.demo("FetchOptionsComponent") }}

## Object Options

When the options are `objects` we should provide `object value`,
and you should not set ``optionValue`` instead you need to set
``compareWith`` or ``dataKey`` to make a comparison between options and value to find the selected items

{{ NgDocActions.demo("ObjectValueComponent") }}

## Primitive Options

When the options are `Primitives` we should provide `primitive value`,in this case `optionValue`
and `optionLabel` can be `undefined`.

{{ NgDocActions.demo("PrimitiveValueComponent") }}

> **Note**
> **In the server-side mode, there is no way to verify the options with the value, because all the options are not
available at once.**
>
> so you can see, there is `option_2500` in the value of the form-control which is not present in the fake DB options,
> but
> It has not been removed from the value of the select box and the form.


> **Summary**
>
> In the server-side mode whatever value you provide, will be added to the select box value without verifying with the
> received options.
