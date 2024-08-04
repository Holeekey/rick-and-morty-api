import { ApplicationService } from 'src/common/application/service/application.service';
import { CreateCharacterDTO } from './types/dto';
import { CreateCharacterResponse } from './types/response';
import { Result } from 'src/common/application/result-handler/result.handler';
import { IDGenerator } from 'src/common/application/ID/ID.generator';
import { DateProvider } from 'src/common/application/date/date.provider';
import { Character, CharacterStatus } from '../../models/character';
import { CharacterRepository } from '../../repositories/character.repository';
import { characterSpeciesStatusFoundError } from '../../errors/character.exists.by.species.and.status';

export class CreateCharacterCommand
  implements ApplicationService<CreateCharacterDTO, CreateCharacterResponse>
{
  constructor(
    private idGenerator: IDGenerator<string>,
    private dateProvider: DateProvider,
    private characterRepository: CharacterRepository,
  ) {}

  async execute(
    data: CreateCharacterDTO,
  ): Promise<Result<CreateCharacterResponse>> {
    const character: Character = {
      id: this.idGenerator.generate(),
      name: data.name,
      gender: data.gender,
      species: data.species,
      status: CharacterStatus.ACTIVE,
      createdAt: this.dateProvider.current,
    };

    if (await this.characterRepository.existsBySpeciesAndStatus(character)) {
      return Result.error(characterSpeciesStatusFoundError());
    }

    const characterId = (
      await this.characterRepository.save(character)
    ).unwrap().id;

    return Result.success({
      id: characterId,
    });
  }
}
