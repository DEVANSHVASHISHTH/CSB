const r1 = requre("redline").createInterface({
    input: Process.stdin,
    output: Process.stdout,
});

r1.question("enter something: ",
    (answer) => {
        console.log("you enter:", answer);
        r1.close();
    });
