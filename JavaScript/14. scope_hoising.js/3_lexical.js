/**
 * 
 */

{
    const a = 1; //전역 변수
    console.log(a);

    {
        const a = 2;
        console.log(a);

        {
            const a = 3;
            console.log(a);
        }
    }
}