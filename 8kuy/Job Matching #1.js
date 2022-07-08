function match(candidate, job) {
    if (candidate.minSalary === undefined || job.maxSalary === undefined){
      throw new Error("Oops!")
    } else {
    return candidate.minSalary <= job.maxSalary + candidate.minSalary * 0.1
      }
  }