import { container } from "tsyringe";

import IAppointmentsRepository from "@modules/appoitments/repositories/IAppointmentsRepository";
import AppointmentsRepository from "@modules/appoitments/infra/typeorm/repositories/AppointmentRepository";

import IUsersRepository from "@modules/users/repositories/IUsersRepository";
import UsersRepository from "@modules/users/infra/typeorm/repositories/UsersRepository";

container.registerSingleton<IAppointmentsRepository>(
  "AppointmentsRepository",
  AppointmentsRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);