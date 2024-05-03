## An example challenge submission

```js
// Solution Code
function capitalizeWords(arg) {
  return arg
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Standard In
process.stdin.on("data", (data) => {
  const inputString = data.toString().trim();
  const result = capitalizeWords(inputString);
  console.log(result);
});
```

_Test cases_

```json
 "testCases": [
        {
            "input": "hello world",
            "expectedOutput": "Hello World"
        },
        {
            "input": "this is a test",
            "expectedOutput": "This Is A Test"
        }
    ]
```

## What we are sending to Judge0

```json
{
  "challengeId": "capitalize-word",
  "submissions": [
    {
      "language_id": 63,
      "source_code": "\nfunction capitalizeWords(text) {\n  // Write your code here\n}\n\nprocess.stdin.on(\"data\", (data) => {\n  const inputString = data.toString().trim();\n  const result = capitalizeWords(inputString);\n  console.log(result);\n});\n\n",
      "stdin": "hello world",
      "expected_output": "Hello World"
    },
    {
      "language_id": 63,
      "source_code": "\nfunction capitalizeWords(text) {\n  // Write your code here\n}\n\nprocess.stdin.on(\"data\", (data) => {\n  const inputString = data.toString().trim();\n  const result = capitalizeWords(inputString);\n  console.log(result);\n});\n\n",
      "stdin": "this is a test",
      "expected_output": "This Is A Test"
    },
    {
      "language_id": 63,
      "source_code": "\nfunction capitalizeWords(text) {\n  // Write your code here\n}\n\nprocess.stdin.on(\"data\", (data) => {\n  const inputString = data.toString().trim();\n  const result = capitalizeWords(inputString);\n  console.log(result);\n});\n\n",
      "stdin": "capitalize every word",
      "expected_output": "Capitalize Every Word"
    }
  ]
}
```

## What Judge0 is sending back to us

```json
[
  {
    "token": "54fd412a-6ae0-45e7-9aaf-cd7e25a79dc1"
  },
  {
    "token": "c087d433-95e4-4093-aada-b979da9eb770"
  },
  {
    "token": "55140ed7-2352-43c9-89aa-f708866e9c8a"
  }
]
```

## Decode the token of the submission

```json
tokens: ["54fd412a-6ae0-45e7-9aaf-cd7e25a79dc1", "c087d433-95e4-4093-aada-b979da9eb770", "55140ed7-2352-43c9-89aa-f708866e9c8a"]

```

## Decoded token

```json
[
  {
    /*"source_code": "\nfunction capitalizeWords(text) {\n  // Write your code here\n}\n\nprocess.stdin.on(\"data\", (data) => {\n  const inputString = data.toString().trim();\n  const result = capitalizeWords(inputString);\n  console.log(result);\n});\n\n",
    "language_id": 63,
    */
    "stdin": "hello world",
    "expected_output": "Hello World",
    /*
    "stdout": "undefined\n",*/
    "status_id": 4,
    /*"created_at": "2024-05-02T19:53:32.964Z",
    "finished_at": "2024-05-02T19:53:33.284Z",*/
    "time": "0.018",
    "memory": 7068,
    "stderr": null,
    /*"token": "aef4cfb9-ccc3-4d81-8d94-e84bfd25bbf2",
    "number_of_runs": 1,
    "cpu_time_limit": "5.0",
    "cpu_extra_time": "1.0",
    "wall_time_limit": "10.0",
    "memory_limit": 128000,
    "stack_limit": 64000,
    "max_processes_and_or_threads": 60,
    "enable_per_process_and_thread_time_limit": false,
    "enable_per_process_and_thread_memory_limit": false,
    "max_file_size": 1024,
    "compile_output": null,
    "exit_code": 0,
    "exit_signal": null,
    "message": null,
    "wall_time": "0.018",
    "compiler_options": null,
    "command_line_arguments": null,
    "redirect_stderr_to_stdout": false,
    "callback_url": null,
    "additional_files": null,
    "enable_network": false,
    */
    "status": {
      "id": 4,
      "description": "Wrong Answer" // If this status is Pending, we need to call the api gain until it is different than pending
    }
    /*
    "language": {
      "id": 63,
      "name": "JavaScript (Node.js 12.14.0)"
    }*/
  }
]
```
