# Type Narrowing in TypeScript

Type Narrowing is going from broader type to smaller type.We use type guard to narrow down specific type to exact level.

## How we narrow it?

At first we use typeof to determine exact type.We also use `in` oparetor,its used for cheaking if type has a specific property.And, `instanceof` is used to cheak if type is instanceof for a specific class or not.Type narrowing is important,because we need to connect right type with right methood.


```typescript

// Narrowing down broader type.If its string or number
const LengthCheak = (value: string | number) => {
    if (typeof value === "string") {
        return value.length;
    }
    else {
        return value;
    }
};



// using instanceof to cheak if type is instanceof for specific class
const showDate = (x:Date | string) => {
    if (x instanceof Date) {
        console.log(x.toISOString());
        return;
    }
    const date = new Date(x);
    console.log(date.toISOString());
};


// using in for cheaking if type contains specific property
type Bird={fly:()=>void}
type Fish={swim:()=>void}
const move = (animal:Bird | Fish) => {
    if ("fly" in animal) {
        animal.fly();
        return;
    }
    animal.swim();
};
```


## Conclusion
Type Narrowing is an essential part of Typescript.It fixes the problem of wrong type matching with wrong methood.From a broader type we find exact type ,so wrong type would not match with wrong mwthood.With `in` oparetor we can do specific work if specific property is in the type.`instanceof` helps with cheaking if type is instanceof for a specific class.
