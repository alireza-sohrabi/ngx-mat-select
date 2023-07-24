# Client Side

You should use `client-side` mode when whole the options are available at once, and the size of
the options does not matter, but keep it in mind that the select box uses `Virtual Scroll`, so
you don't worry about number of rendered options in the panel.

When you are using client-side select box, the most important things you need to know are:

- How to treat with the value of the select box?
- What type of option you can provide, `primitives` or `object`?
- What are the `optionValue`, `dataKey`, `compareWith` and `optionLabel`?
- When setting the value, is the value verified with the options?
- Can I load whole the options lazily?
- Can I change the search-box comparison?

> To make it brief, every select box is in the multiple mode, but you can make it single just with
> change the value of the `multiple` input to false

## Object Options

When the options are `objects` we should pay deep attention to what we need to provide for the select box as Inputs

### None value

When you don't want to use any value and want to take advantage of `onSelectionChange` event
somehow no matter which one of  `optionValue`, `dataKey` or `compareWith` inputs you provide

{{ NgDocActions.demo("WithoutAnyValueComponent") }}

> **Warning**
> As you can see when you use `optionVlaue` it has direct impact on the output value of the select box,
> the value would be `option[optionValue]`, while you use `dataKey` or `compareWith` it does not have any effect on it

### Value as primitives

When the value is a primitive like `number` and the options are objects you need to provide
`optionLabel` and `optionValue` at the same time

{{ NgDocActions.demo("ReactiveFormPrimitiveValueComponent") }}

### Value as object

When the value is an object you should not set ``optionValue`` instead you need to set
``compareWith`` or ``dataKey`` to make a comparison between options and value to find the selected items

{{ NgDocActions.demo("ReactiveFormObjectValueComponent") }}

> **Note**
> What exactly are `dataKey` and `compareWith`? what are the differences? `dataKey` or `compareWith`?
>- their functionalities are the same, they are used to find the selected items
>- `dataKey` is a string value which makes a comparison like `option[dataKey] === value[dataKey]` while
   the `compareWith` is a `funciton` which returns a `boolean`, when you provide both of them,
   > the `compareWith` prioritizes.
>- it's recommended to use `dataKey` instead of providing `compareWith`, because when `dataKey` is used, the
   > options and value are compared in a safe way checking all the possible errors which could be happened because
   of `null` or `undefined` state.

> **Note**
> When setting the value, is the value verified with the options?
>
> **Value would be verified with the received options**.
>
> As you can see in the TypeScript file the value with the id of `2500`  is not present in the options so this is the
> rule
> in the client-side
> mode when the initial value has some values which are not present in the options, the select box will automatically
> remove them from the form and the value.


> **Summary**   
> options can be objects in this case
>- you need to set  `optionLabel`
>- if the value is a primitive, you just need to set `optionValue` or one of  `dataKey` and `compareWith` if you are
   setting the `optionValue` you need to know it has direct impact on the output value of the select box
>- if the value is an object, you should not set the `optionValue` instead should set `dataKey` or `compareWith`
   function in order to
   find the selected items

## Primitive Options

The options items can be Primitives like `boolean`, `number`, `string`, `undefined` in this case `optionValue`
and `optionLabel` can be `undefined`, if they are set, the select component automatically will be noticed that the
options are primitive and ignore the provided `optionValue` and `optionLabel`.

> When It comes to primitive options we should set the value of the select-box a primitive like the option

{{ NgDocActions.demo("PrimitiveComponent") }}

## Lazy load options

When you need to load the options from the server lazily, you have to set `loading` input `true` until
the options are loaded, but remember in the client-mode you should load all the options together at once.

{{ NgDocActions.demo("OptionsAtOnceComponent") }}

> **Warning**
> If you don't set `loading` input `true` while the options are loading, the select box won't wait for it to be loaded
> and will remove the initial value

## Search box comparison

if you want to change the default comparison between options and
searchTerm you can set `searchComparison` input like the below.

{{ NgDocActions.demo("SearchBoxComparisonComponent") }}
