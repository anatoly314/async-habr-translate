const task = function(taskNum, seconds, negativeScenario) {
    return new Promise((resolve, reject) => {
        setTimeout(_ => {
            if (negativeScenario)
                reject(new Error('Task ' + taskNum + ' failed!'));
            else
                resolve('Task ' + taskNum + ' succeed!');
        }, seconds * 1000)
    });
};

// const run = async function() {
//     let t1 = task(1, 3, true);
//     let t2 = task(2, 1, true);
//     let r1 = await t1;
//     let r2 = await t2;
//     console.log(r1 + ' ' + r2);
// };


const run = async function() {
    try {
        let t1 = task(1, 3, false);
        let t2 = task(2, 1, true);
        await Promise.all([t1, t2]);
        // let r1 = await t1;
        // let r2 = await t2;
        console.log(r1 + ' ' + r2);
    }
    catch (err) {
        console.log(err);
        return new Error(err);
    }
};

console.log('test');
run().catch(err => console.log("errror", err));
// try { await run(); } catch(err) { console.log('Caught error', err); };
// run().catch(err => { console.log('Caught error', err); });
// (async function() { try { await run(); } catch(err) { console.log('Caught error', err); }; })();


