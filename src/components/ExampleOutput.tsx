import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog'

const ExampleOutput = () => {
  return (
    <Dialog>
      <DialogTrigger className="underline hover:no-underline">
        view example output
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>example post as markdown</DialogTitle>
        </DialogHeader>
        <div className="prose prose-sm dark:prose-invert max-w-none rounded-2xl bg-muted/40 px-8 py-4">
          <h2>python projects</h2>
          <p>
            <em>by july on 2024-12-11</em>
          </p>

          <p>
            for our devs @pim @paul: i've made a python template so that paul
            will actually use python poetry and i never have to{' '}
            <code>pip install -r requirements.txt</code> ever again (a dev can
            hope).
          </p>

          <p>
            read the readme and use it from now on. improvements are welcome!
          </p>

          <p>
            <a href="https://github.com/socialtechnologylab/python-template">
              https://github.com/socialtechnologylab/python-template
            </a>
          </p>

          <h3>comments</h3>

          <h4>pim (2024-12-11 11:31):</h4>
          <p>
            almost 2025 and stl has decided it's time to move on from
            requirements files
          </p>

          <ul>
            <li>
              <strong>july</strong> at 2024-12-11 13:41: society if people don't
              just dump their pip freeze:
            </li>
          </ul>

          <h4>paul (2024-12-11 16:40):</h4>
          <p>do love me this devex</p>

          <ul>
            <li>
              <strong>july</strong> at 2024-12-12 09:23: 👍👨‍💻
            </li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ExampleOutput
