const multiplyValue = (value: number, multiplier?: number): number => {
  if (multiplier != undefined) {
    return value * multiplier;
  } else {
    return value * 2;
  }
};

const processInput = (value: string | number | boolean): string | number => {
  if (typeof value === "string") {
    return value.trim().toLocaleLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    if (value) {
      return "Active";
    } else {
      return "Inactive";
    }
  }
};

const formatCoordinate = (
  info: readonly [latitude: number, longitude: number, locationName: string],
): string => {
  const [latitude, longitude, locationName] = info;
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  const arrs = arrays;
  let finalArr: T[] = [];
  arrs.map((item: T[]) => {
    finalArr = [...finalArr, ...item];
  });

  return finalArr;
};

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (values: Course[], minStudents: number): Course[] => {
  const arrs = values;
  let final = arrs.filter((obj: Course) => {
    return obj.isPublished && obj.students >= minStudents;
  });

  return final;
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  const arrs = items;
  const values: T[K][] = [];
  arrs.map((obj: T) => {
    values.push(obj[key]);
  });
  return values;
};

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

const validateAgeAsync = async (age: number): Promise<string> => {
  if (age >= 18) {
    const msg: string = await new Promise((res) => {
      setTimeout(() => {
        res("Access Granted");
      }, 1000);
    });
    return msg;
  } else {
    throw new Error("Access Denied: Must be 18 or older");
  }
};
