package io.github.prepayments.service.mapper;


import io.github.prepayments.domain.*;
import io.github.prepayments.service.dto.PrepaymentEntryDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link PrepaymentEntry} and its DTO {@link PrepaymentEntryDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface PrepaymentEntryMapper extends EntityMapper<PrepaymentEntryDTO, PrepaymentEntry> {



    default PrepaymentEntry fromId(Long id) {
        if (id == null) {
            return null;
        }
        PrepaymentEntry prepaymentEntry = new PrepaymentEntry();
        prepaymentEntry.setId(id);
        return prepaymentEntry;
    }
}
