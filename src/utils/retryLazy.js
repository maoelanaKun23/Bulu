export default function retryLazy(
  lazyComponent,
  retriesLeft = 5,
  interval = 1000
) {
  return new Promise((resolve, reject) => {
    lazyComponent()
      .then(resolve)
      .catch(error => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            // reject ('maximum retries exceeded')
            reject(error);
            return;
          }

          // passing on "reject" is the important part
          retryLazy(lazyComponent, retriesLeft - 1, interval).then(
            resolve,
            reject
          );
        }, interval);
      });
  });
}
